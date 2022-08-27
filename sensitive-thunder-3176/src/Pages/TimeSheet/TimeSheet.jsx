import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/layout";

import { Tooltip } from "@chakra-ui/tooltip";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  FiCalendar,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiCopy,
  FiMoreVertical,
  FiPlus,
  FiRefreshCw,
  FiUser,
} from "react-icons/fi";
import TimeSide from "./TimeSide";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  " Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const TimeSheet = () => {
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");

  const tasks = [];
  const d = new Date();
  let day = days[d.getDay()];
  let date = d.getDate();
  let monthName = months[d.getMonth()];

  

  return (
    <div>
      <TimeSide />
      <Box mt={-785} ml={265} bgColor={"white"} h={"80vh"} w={"86%"}>
        {/*TODO:  import Your Component here */}
        <Box m={"auto"} justifyContent={"center"} h={"80vh"} w={"70%"}>
          <HStack mt={50} h={100} w={"100%"}>
            <Flex w={150}>
              <Tooltip
                label="previous day"
                placement="bottom-start"
                fontSize="md"
              >
                <IconButton
                  bgColor={"white"}
                  border={"1px solid gray"}
                  borderTopLeftRadius={7}
                  borderBottomLeftRadius={7}
                  borderTopRightRadius={0}
                  borderBottomRightRadius={0}
                  icon={<FiChevronLeft />}
                  _hover={{ bgColor: "#eaeaea" }}
                />
              </Tooltip>

              <IconButton
                bg={"white"}
                color={"gray"}
                borderRadius={0}
                w={70}
                border={"1px solid gray"}
                borderLeft={"none"}
                borderRight={"none"}
                icon={<FiCalendar />}
                _hover={{ bgColor: "#eaeaea" }}
              ></IconButton>
              <Tooltip label="next day" placement="bottom-start" fontSize="md">
                <IconButton
                  color={"gray"}
                  bgColor={"white"}
                  border={"1px solid gray"}
                  borderTopRightRadius={7}
                  borderBottomRightRadius={7}
                  borderBottomLeftRadius={0}
                  borderTopLeftRadius={0}
                  icon={<FiChevronRight />}
                  _hover={{ bgColor: "#eaeaea" }}
                />
              </Tooltip>
            </Flex>

            <Flex>
              <Text color={"gray"} fontSize={18} fontWeight={499}>
                {`${day}, ${date} ${monthName}`}
              </Text>
            </Flex>
            <Spacer />

            <Flex>
              <Button
                color={"gray"}
                bgColor={"white"}
                border={"1px solid gray"}
                borderTopLeftRadius={7}
                borderBottomLeftRadius={7}
                borderTopRightRadius={0}
                borderBottomRightRadius={0}
                _hover={{ bgColor: "#eaeaea" }}
              >
                Day
              </Button>

              <Button
                color={"gray"}
                bgColor={"white"}
                border={"1px solid gray"}
                borderLeft={"none"}
                borderTopRightRadius={7}
                borderBottomRightRadius={7}
                borderBottomLeftRadius={0}
                borderTopLeftRadius={0}
                _hover={{ bgColor: "#eaeaea" }}
              >
                Calender
              </Button>
            </Flex>
            <Tooltip
              label="refresh data and synchronize integration"
              placement="bottom-start"
              fontSize="md"
            >
              <IconButton
                color={"gray"}
                bgColor={"white"}
                border={"1px solid gray"}
                borderRadius={7}
                icon={<FiRefreshCw />}
                _hover={{ bgColor: "#eaeaea" }}
              />
            </Tooltip>

            <IconButton
              color={"gray"}
              bgColor={"white"}
              border={"1px solid gray"}
              borderRadius={7}
              icon={<FiUser />}
              _hover={{ bgColor: "#eaeaea" }}
            >
              <FiChevronDown />
            </IconButton>

            <Button
              color={"gray"}
              bgColor={"white"}
              border={"1px solid gray"}
              borderRadius={7}
              _hover={{ bgColor: "#eaeaea" }}
            >
              Bulk Edit
            </Button>
            <IconButton
              color={"gray"}
              bgColor={"white"}
              border={"1px solid gray"}
              borderRadius={7}
              icon={<FiMoreVertical />}
              _hover={{ bgColor: "#eaeaea" }}
            ></IconButton>
          </HStack>

          <HStack
            mt={2}
            h={"70px"}
            w={"100%"}
            boxShadow={"0 0 10px 0 rgb(37 207 96 / 35%)"}
            border={"1px solid #4bb064"}
            borderRadius={10}
            p={2.5}
          >
            <Input
              placeholder="Select task and project"
              h={"60px"}
              w={"30%"}
              variant="outline"
              border={"none"}
              _hover={{ border: "1px solid gray" }}
              value={task}
              onChange={(e) => setTask(e.target.value)}
            ></Input>

            <Spacer />
            <Input
              fontSize={14}
              placeholder="note"
              h={"40px"}
              w={"60px"}
              ml={2.5}
              variant="outline"
              border={"none"}
              _hover={{ border: "1px solid gray" }}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></Input>
            <Spacer />
            <Button
              _hover={{ backgroundColor: "#7bca84", color: "white" }}
              bgColor={"#4bb063"}
              borderColor={"#49ac61"}
              color={"white"}
            >
              ADD TIME ENTRY
            </Button>
          </HStack>

          {tasks.length === 0 ? (
            <Box>
              <VStack justifyContent="center">
                <Image
                  h={"300px"}
                  w={"250px"}
                  src={
                    "https://cdn.timecamp.com/res/css/images/timesheet-classic-empty-state.svg"
                  }
                ></Image>
                <Box ml={5} mt={-50}>
                  <Text fontSize={"24px"} fontWeight={500}>
                    No recent Time entries
                  </Text>
                </Box>
                <Box ml={5} mt={"-50px"}>
                  <Text fontSize={"14px"}>
                    Seems like you haven’t tracked any time yet
                  </Text>
                </Box>
              </VStack>
              <HStack>
                <Tooltip
                  label="new time entry"
                  placement="bottom-start"
                  fontSize="md"
                >
                  <IconButton
                    color={"gray"}
                    bgColor={"white"}
                    border={"1px solid gray"}
                    borderRadius={7}
                    icon={<FiPlus />}
                  ></IconButton>
                </Tooltip>
                <Tooltip
                  label="entries from previous timesheets"
                  placement="bottom-start"
                  fontSize="md"
                >
                  <IconButton
                    color={"gray"}
                    bgColor={"white"}
                    border={"1px solid gray"}
                    borderRadius={7}
                    icon={<FiCopy />}
                  ></IconButton>
                </Tooltip>
                <Spacer />
                <Button bgColor={"#fcbd01"} color={"white"}>
                  Pending Approval - Reopen
                </Button>
              </HStack>
            </Box>
          ) : (
            <Box></Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default TimeSheet;
