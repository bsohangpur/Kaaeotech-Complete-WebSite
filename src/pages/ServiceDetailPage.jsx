import { Box } from "@chakra-ui/react";
import { SingleService } from "../components";
import { useParams } from "react-router-dom";
import { serviceDetailData } from "../data";
import { Error } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetSingleServiceData } from "../redux/slices/serviceSlice";
import { Loading } from "../utils";
import { _404 } from "../assets";

const ServiceDetailPage = () => {
  const link = useParams();
  const dispatch = useDispatch();
  const { service, isLoading } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(GetSingleServiceData(link.service));
  }, []);

  return (
    <Box>
      {isLoading && (
        <Box className="w-full z-[999] h-screen fixed top-0 left-0 bg-transparent backdrop-blur-sm">
          <Loading />
        </Box>
      )}
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
