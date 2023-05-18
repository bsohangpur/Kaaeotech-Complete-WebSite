import { Box, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import { BlogCard } from "../components";
import { Heading } from "../constants";

const blogs = [
  {
    title: "Blog 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis voluptas nobis numquam fugiat iure ipsam, reiciendis omnis excepturi similique repudiandae quos qui maiores optio voluptatum perspiciatis ullam odit voluptatem nostrum delectus incidunt ipsa ad totam culpa. Provident rerum, repudiandae distinctio, animi unde qui ut quisquam magni eveniet incidunt quis voluptates aspernatur a laborum dolore consequuntur iure pariatur blanditiis suscipit ipsa culpa placeat. Corrupti, quod. Maiores quasi provident iure dicta maxime, asperiores necessitatibus, ut consectetur ipsa ad dignissimos facilis beatae quia veritatis. Quia ex exercitationem, perspiciatis fugiat voluptatem neque amet qui omnis obcaecati nisi id consequatur facere ipsum dolor, quas esse quidem illum deleniti. Aut totam repellat voluptatibus distinctio quidem! Libero deserunt quas magnam vel corrupti, inventore in optio sequi quaerat, eaque repellendus facere repudiandae nesciunt illo impedit quisquam distinctio similique debitis ratione quibusdam. Porro minus neque est praesentium! Esse laudantium consequatur quos, eius aspernatur in obcaecati et officia vitae doloribus! Odio modi porro dignissimos ratione molestias architecto impedit consequatur laborum nulla odit reiciendis cupiditate ipsa, assumenda incidunt tempore expedita quaerat nemo harum cum rerum vel ut! Nemo officia corrupti, totam assumenda nesciunt, excepturi dicta expedita vel reiciendis culpa nobis natus quos, doloremque officiis voluptatum maiores! Praesentium a harum aperiam ducimus. Est, modi laudantium fugiat quasi eius aperiam quo consectetur delectus animi atque odio iure vel quas facere explicabo, molestiae rerum fuga, inventore perspiciatis corporis in dolor! Debitis, nostrum ad, enim error magni quos, voluptas sunt accusamus sint fugiat nihil vitae quibusdam natus quis maxime a tempora. Vitae cupiditate et, aliquid nesciunt eius repellat accusantium distinctio impedit illum ut eum tenetur nam, quae quidem fugiat? Labore rerum quibusdam error, ipsum facere, eum placeat voluptatem vero cum tempore quo qui repellat dolorum totam provident reprehenderit tempora nam excepturi, iste obcaecati velit ad? Quasi assumenda enim aspernatur cum iste voluptatem vel labore.",
    image: "",
    link: "",
    categories: ["category1", "category2"],
    tags: ["tag1", "tag2"],
  },
];

const BlogContainer = () => {
  const gridCols = useBreakpointValue({ base: 1, md: 3 });

  return (
    <Box py={12} mx={8}>
      <Heading title="Our Blog" />
      <Text my={6}>
        Welcome to my blog! Here you'll find my latest thoughts and musings on a
        variety of topics.
      </Text>
      <Grid templateColumns={`repeat(${gridCols}, 1fr)`} gap={10}>
        {blogs.map((blog) => (
          <BlogCard data={blog} />
        ))}
      </Grid>
    </Box>
  );
};

export default BlogContainer;
