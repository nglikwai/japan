import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import LuggageIcon from "@mui/icons-material/Luggage";
import Typography from "@mui/material/Typography";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Box, Stack } from "@mui/material";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";

export default function Plan() {
  const [plans, setPlans] = React.useState([
    [
      {
        time: "01 Apr 2023 00:00:00 GMT+0800",
        icon: <AirplaneTicketIcon />,
        title: "預訂機票",
        description: "",
      },
    ],
    [
      {
        time: "20 Apr 2023 00:00:00 GMT+0800",
        icon: <HotelIcon />,
        title: "預訂酒店",
        description: "",
      },
    ],
    [
      {
        time: "24 Jul 2023 00:00:00 GMT+0800",
        icon: <LuggageIcon />,
        title: "收拾行李",
        description: "",
      },
    ],
    [
      {
        time: "27 Jul 2023 15:40:00 GMT+0800",
        icon: <FlightTakeoffIcon />,
        title: "起飛",
        description: "香港國際機場 HKG",
      },
      {
        time: "27 Jul 2023 20:30:00 GMT+0800",
        icon: <FlightLandIcon />,
        title: "到達",
        description: "大阪關西國際機場 KIX",
      },
      {
        time: "27 Jul 2023 21:30:00 GMT+0800",
        icon: <HotelIcon />,
        title: "酒店 Check in",
        description: "大阪酒店",
      },
      {
        time: "27 Jul 2023 22:00:00 GMT+0800",
        icon: <RestaurantIcon />,
        title: "晚餐",
        description: "大阪酒店",
      },
    ],
    [
      {
        time: "28 Jul 2023 10:00:00 GMT+0800",
        icon: <RestaurantIcon />,
        title: "早餐",
        description: "大阪酒店",
      },
      {
        time: "28 Jul 2023 11:00:00 GMT+0800",
        icon: <RestaurantIcon />,
        title: "午餐",
        description: "大阪酒店",
      },
      {
        time: "28 Jul 2023 20:00:00 GMT+0800",
        icon: <RestaurantIcon />,
        title: "晚餐",
        description: "大阪酒店",
      },
      {
        time: "28 Jul 2023 21:00:00 GMT+0800",
        icon: <HotelIcon />,
        title: "酒店休息",
        description: "大阪酒店",
      },
    ],
    [
      {
        time: "29 Jul 2023 10:00:00 GMT+0800",
        icon: <RestaurantIcon />,
        title: "早餐",
        description: "大阪酒店",
      },
      {
        time: "29 Jul 2023 11:00:00 GMT+0800",
        icon: <RestaurantIcon />,
        title: "午餐",
        description: "大阪酒店",
      },
      {
        time: "29 Jul 2023 20:00:00 GMT+0800",
        icon: <RestaurantIcon />,
        title: "晚餐",
        description: "大阪酒店",
      },
      {
        time: "29 Jul 2023 21:00:00 GMT+0800",
        icon: <HotelIcon />,
        title: "酒店休息",
        description: "大阪酒店",
      },
    ],
  ]);
  return (
    <Timeline position="alternate">
      <Box component={"h1"} color="primary.main">
        <TimeToLeaveIcon />
        行程
      </Box>
      <Stack height="80vh" boxSizing="border-box" overflow={"scroll"} pb={5}>
        {plans.map((day) => (
          <Box>
            <Box component={"h2"} key={day} color="primary.main">
              {new Date(day[0].time).toDateString().substring(3, 10)}
            </Box>
            {day.map((item, i) => {
              const time = new Date(item.time).toTimeString().substring(0, 5);
              const now = new Date();
              const _time = new Date(item.time);
              return (
                <TimelineItem key={item.time}>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    {time}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color={now > _time ? "success" : "grey"}>
                      {item.icon}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      {item.title}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Box>
        ))}
      </Stack>
    </Timeline>
  );
}
