import { Box, Button,  Flex, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  
  TableContainer,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux/es/exports'
const Approval = () => {
  const [approved,setApproved]= useState(false)
const tasks= useSelector(state=>state.AppReducer.tasks)

const handleApproved=()=>{
  setApproved(true)
}
// console.log(tasks)
  return (
    <Box m={4}>
      <Text color={'gray.400'} fontSize={'2xl'}>Daily approvals</Text>
<Flex  gap={8} p={8}  bgColor={'gray.100'}>
<Box>

        <label>TimeFrame</label>
      <Flex>

        <Input aria-label='Start' w={40} type={'datetime-local'}/>
        <Input w={40} type={'datetime-local'}/>
      </Flex>
</Box>
<Box>

        <label>Status</label>
      <Flex>
      <Select>
        <option>All Statuses</option>
        <option>Approved</option>
        <option>Open</option>
        <option>Pending</option>
        <option>Rejected</option>
        </Select>  
      </Flex>
</Box>

</Flex>
<TableContainer border={'1px solid'} borderColor={'gray.300'} rounded={10} py={8}>
  <Table size='sm' >
    <Thead >
      <Tr>
        <Th>Period</Th>
        <Th>Name</Th>
        <Th>Total Time</Th>
        <Th>Status</Th>
        <Th>Approver</Th>
      </Tr>
    </Thead>
    <Tbody>
      {tasks.length>0 && tasks.map((task)=>{
       return ( <Tr>
        <Td>{task.curDate}</Td>
        <Td>2m</Td>
        <Td>{task.name}</Td>
        <Td><Button color={'white'} bgColor={approved?"green.400":"orange.300"} onClick={handleApproved}>{approved?"Approved":"Pending Approval"}</Button></Td>
        <Td>eve.holt@reqres.in</Td>
      </Tr>
      )
      })}
      
     
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>

    </Box>
  )
}

export default Approval