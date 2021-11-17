import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import AccordionItems from "./AccordionItems";
import axios from "axios";
import Post from "./types.module";

function App() {

  const [post, setPost] = React.useState<Post[]>([]);

  React.useEffect(() => {
    axios
      .get("https://616e819b715a630017b39610.mockapi.io/TodosAccordion")
      .then((res) => {
        setPost(res.data);
      });
  }, []);

  console.log(post);

  return (
    <div className="wrapper">
      <h3>To Do Post</h3>
      <div className="input">
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth label="Name post" id="fullWidth" />
        </Box>
      </div>
      <div className="textarea">
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Writing..."
          style={{ width: 800, padding: 10, fontSize: 18 }}
        />
      </div>
      {post.map((item) => (
        <AccordionItems name={item.name} paragraph={item.paragraph} />
      ))}
    </div>
  );
}

export default App;
