import React ,{useState,useEffect}from 'react'
import {Box,Heading,Text,Flex,Button,Input,Avatar,Select} from "@chakra-ui/react"
import {FiUserPlus} from "react-icons/fi"

import {Link} from "react-router-dom"
import styles from "./user.module.css"
import GuestInvite from './modal/GuestInvite'
import CreateGroup from './modal/CreateGroup'
import Email from "./modal/Email"
import {BiEdit} from "react-icons/bi"
import {BsPlusLg} from  "react-icons/bs"
import {RiDeleteBin5Line} from "react-icons/ri"
import axios from "axios"
function User() {
    const [user,setUser]=useState([])
    useEffect(() =>{
      axios.get(`http://localhost:8080/user`).then((r)=>setUser(r.data))
    },[])
    console.log(user)
  return (
    <div>
        <Box marginTop={150}>
            <Box w="95%" h="50px" backgroundColor="#d9e9fe" justifyContent={"center"} borderRadius="10px" paddingTop={1}>
               <Flex> <FiUserPlus   className={styles.user}/> <Text marginTop="auto"color="#88a9f9" marginLeft="10px" >You can now invite guests like clients, vendors, or contractors. You can add them free of charge</Text>
               <a href="" target="_blank" style={{marginLeft:"2px",color:"#88a9f9" ,fontWeight:"700",textDecoration: "underline",marginTop:"auto"}}>.Invite Guest</a></Flex>
            </Box>
           <Box w="95%" h="80px" backgroundColor="#f8f8f8" justifyContent={"center"} borderRadius="10px" paddingTop={1} marginTop="30px" >
           <Flex  paddingTop={1} marginTop="20px" >
           
            <GuestInvite/>
            <CreateGroup/>
            <Email/>
           <Input type="text" placeholder='search users' marginLeft={600} w={150}/>
           </Flex>
           </Box>
          
           <Box className={styles.userBox}>
            <Flex justifyContent="space-around" marginTop="20px" h="50px">
                <Box>
                    {/* <select name="" id="" placeholder='GROUP/USER'>
                        <option value=""></option>
                    </select> */}
                    <Text>GROUP/USER</Text>
                </Box>
                <Box>
                    {/* <select name="" id="" placeholder='EXPAND ALL '>
                        <option value=""></option>
                    </select> */}
                    <Text>EXPAND ALL</Text>
                </Box>
                <Box>
                    {/* <select name="" id="" placeholder="EXTERNAL ID"><option value=""></option></select> */}
                    <Text>EXTERNAL ID</Text>
                </Box>
                <Box>
                    {/* <select name="" id="" placeholder='INVOLVED IN '><option value=""></option></select> */}
                    <Text>INVOLVED IN </Text>
                </Box>
                <Box>
                    {/* <select name="" id="" placeholder='ROLE'><option value=""></option></select> */}
                    <Text>ROLE</Text>

                </Box>
                
            </Flex>
            <Box marginTop="30px" className={styles.back}><Flex>
           <input type="checkbox"  style={{marginRight:"20px",marginLeft:"20px"}} />
                <Text marginTop="auto" marginBottom="auto">People</Text>
                
                <Button className={styles.back}><BiEdit className={styles.back}/></Button>
                <Button className={styles.back}><BsPlusLg className={styles.back}/></Button>
            </Flex></Box>
           
        <Box marginTop="40px" >
        
               
                {
                    user.map((user)=>{
                    return(
                        <Flex>
                         <input type="checkbox"  style={{marginRight:"20px",marginLeft:"20px"}} />
                        <Avatar src='https://bit.ly/broken-link' h="30px"  w="30px"/>
                <Text marginLeft={10} marginTop="auto" marginBottom="auto">{user.email}</Text>
                <Box className={styles.bgchange}>
                <Button marginLeft={10} className={styles.accountbtn}><BiEdit fontSize={20}/></Button>
                <Button marginLeft={5} className={styles.accountbtn}><RiDeleteBin5Line fontSize={20}/></Button>
                </Box>
                </Flex>
                    )})
                }
          
        </Box>
           </Box>
           <Flex>
           <Select placeholder='Bulk Edit' w="150px" marginTop="20px" >
  <option value='option1'>Delete Select</option>
  <option value='option2'>Move Select</option>
  <option value='option3'>Change Role for Select</option>
  <option value='option3'>Disable/Unable Select</option>
</Select>
<Button bg="#4bb063"  marginTop="20px" marginLeft={5} color="white">Apply</Button>
           </Flex>
        </Box>
        
    </div>
  )
}

export default User