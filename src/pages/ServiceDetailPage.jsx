import { Box } from "@chakra-ui/react";
import { SingleService } from "../components";
import { useParams } from "react-router-dom";
import { Error } from "../constants";
import { useSelector } from "react-redux";
import { GetSingleServiceData } from "../redux/slices/serviceSlice";
import { FetchComponent } from "../utils";
import { _404 } from "../assets";

const ServiceDetailPage = () => {
  const link = useParams();
  const { service, isLoading } = useSelector((state) => state.service);

  return (
    <Box>
      <FetchComponent fetchFunction={GetSingleServiceData(link.service)} loading={isLoading}/>
      {service ? (
        !isLoading && service.length > 0 ? (
          <SingleService
            title={!isLoading && service[0].title}
            description={!isLoading && service[0].description}
            image={!isLoading && service[0].image}
            data={!isLoading && service[0].plans}
          />
        ) : (
          service.length === 0 && (
            <Error
              code={404}
              message="page not found"
              detail=""
              path="/service"
              image={_404}
            />
          )
        )
      ) : (
        <Box className=" h-[80vh] w-full"/>
      )}
    </Box>
  );
};

export default ServiceDetailPage;
