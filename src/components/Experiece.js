import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Experiece() {
  return (
    <div className="w-auto">
      <Typography
        variant="h2"
        className="pb-4 text-white capitalize font-clubbed tracking-widest font-bold md:text-6xl"
      >
        Experience
      </Typography>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-custom-500">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              nubit soft pvt ltd
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                mern stack developer:
              </span>
              Working as a MERN stack developer allows you to bring innovative
              web applications to life; harness your expertise, stay updated
              with the latest technologies, and let your creativity shine in
              every project.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-custom-500">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              smit
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                mern stack developer:
              </span>
              Gaining valuable experience as an intern has honed your skills and
              broadened your horizons; continue to apply your knowledge, learn
              from every opportunity, and make a positive impact in your field.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
