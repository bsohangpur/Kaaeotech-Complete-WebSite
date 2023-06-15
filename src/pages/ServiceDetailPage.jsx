import { Box } from "@chakra-ui/react";
import { SingleService } from "../components";
import { useParams } from "react-router-dom";
import { Error } from "../constants";
import { useSelector } from "react-redux";
import { GetSingleServiceData } from "../redux/slices/serviceSlice";
import { FetchComponent } from "../utils";
import { _404 } from "../assets";
import { Helmet } from "react-helmet";
import PageAnimation from "./PageAnimation";

const ServiceDetailPage = () => {
  const link = useParams();
  const { service, isSingleLoading: isLoading } = useSelector(
    (state) => state.service
  );

  return (
    <PageAnimation>
      <Box>
        <Helmet>
          <title>Service Detail page - Kaaeotech Solutions</title>
          <meta
            name="description"
            content="This is the Service Detail page page of Kaaeotech Solutions."
          />
        </Helmet>
        <FetchComponent
          fetchFunction={GetSingleServiceData(link.service)}
          loading={isLoading}
        />
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
          <Box className=" h-[80vh] w-full" />
        )}
      </Box>
    </PageAnimation>
  );
};

export default ServiceDetailPage;
