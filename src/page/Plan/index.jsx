import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import { location_plan } from "../../constants";

export default function Plan() {
  const [plans, setPlans] = React.useState(location_plan);
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
