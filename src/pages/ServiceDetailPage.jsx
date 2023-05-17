import { Box } from "@chakra-ui/react";
import { SingleService } from "../components";
import { useParams } from "react-router-dom";
import { serviceDetailData } from "../data";
import { Error } from "../constants";

const ServiceDetailPage = () => {
  const link = useParams();

  const [data] =
    serviceDetailData &&
    serviceDetailData.filter((value) => value.title === link.service.replaceAll('%20',' '));

  return (
    <Box>
      {
        data
        ?
        <SingleService
        title={data.title}
        description={data.description}
        image={data.image}
        data={data.plan}
      />
      :
      <Error code={404} message='page not found' detail="" path='/service' image=''/>
      }
      
    </Box>
  );
};

export default ServiceDetailPage;
