import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { BookOpenIcon } from "@heroicons/react/24/solid";

export default function Education() {
  return (
    <div className="w-auto">
      <Typography
        variant="h2"
        className="pb-4 text-white font-clubbed tracking-widest font-bold md:text-6xl"
      >
        Education
      </Typography>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-custom-500">
              <BookOpenIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              Diploma in software engineering
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                Aptech Learning Pakistan:
              </span>
              Empowering education opens doors to countless possibilities;
              remain curious, put in the effort, and let your enthusiasm for
              knowledge lead you to extraordinary achievements.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-custom-500">
              <BookOpenIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              IT Training
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                Saylani:
              </span>
              Completing the MERN stack course has equipped you with essential
              skills; embrace the journey, apply your knowledge, and transform
              your coding passion into a successful career.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-custom-500">
              <BookOpenIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              Govt college of commerce & economics
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                intermediate:
              </span>
              intermediate education sets a strong foundation for future
              success; stay dedicated, explore your interests, and use this
              pivotal stage to build a path towards your aspirations.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2 bg-custom-500">
              <BookOpenIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              className="nunito text-white text-3xl tracking-wider capitalize"
            >
              KMA Boys Secondary School
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gary"
              className="font-normal text-gray-400 tracking-wide nunito"
            >
              <span className="capitalize tracking-widest font-semibold me-2">
                matriculation:
              </span>
              Completing matriculation marks the beginning of an exciting
              journey; stay motivated, embrace new challenges, and let your
              thirst for knowledge pave the way to a bright future.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
