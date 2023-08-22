import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function ProfileCard() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1  gap-6 mt-12 lg:w-4/5 mx-auto">
      <Card className="w-96 mx-auto bg-gray-50 ">
        <CardHeader floated={false} className=" rounded-lg">
          <img
            className="h-80 w-96 inset-0 object-cover shadow-lg"
            src="https://rustjobs.dev/static/alex-55f1b5ec7723a5298e9178ca0cf73ad6.webp"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center ">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium text-gray-500"
            textGradient
          >
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              className="text-blue-400"
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <FaFacebook />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              className="text-blue-400"
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <FaTwitter />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              className="text-purple-600"
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <FaInstagram />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
      <Card className="w-96 mx-auto bg-gray-50  ">
        <CardHeader floated={false} className=" rounded-lg">
          <img
            className="h-80  object-cover shadow-lg"
            src="https://rustjobs.dev/static/julien-5cc17a019c4feb0da0f65dfba61d27af.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center ">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium text-gray-500"
            textGradient
          >
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              className="text-blue-400"
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <FaFacebook />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              className="text-blue-400"
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <FaTwitter />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              className="text-purple-600"
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <FaInstagram />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
      <Card className="w-96 mx-auto bg-gray-50 ">
        <CardHeader floated={false} className=" rounded-lg">
          <img
            className="h-80 w-96 inset-0 object-cover shadow-lg"
            src="https://rustjobs.dev/static/archie-98fb50b29fd49b1d21cdfbe45081a47c.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center ">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium text-gray-500"
            textGradient
          >
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              className="text-blue-400"
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <FaFacebook />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              className="text-blue-400"
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <FaTwitter />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              className="text-purple-600"
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <FaInstagram />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
      <Card className="w-96 mx-auto bg-gray-50 ">
        <CardHeader floated={false} className=" rounded-lg">
          <img
            className="h-80 w-96 inset-0 object-cover shadow-lg"
            src="https://rustjobs.dev/static/ollie-2bbd73d84bf1ef8e24c39d6116cbbed7.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center ">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium text-gray-500"
            textGradient
          >
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              className="text-blue-400"
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <FaFacebook />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              className="text-blue-400"
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <FaTwitter />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              className="text-purple-600"
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <FaInstagram />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}
