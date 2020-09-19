import { NowRequest, NowResponse } from "@vercel/node";
import { renderPicture } from "../images";

const fs = require("fs");

export default async function (req: NowRequest, res: NowResponse) {
  try {
    const picture = await renderPicture(String(req.query.name));
    // console.log(String(req.query.name));
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(picture);
    
    // const gif = fs.createReadStream(`${__dirname}/../assets/catTyping.gif`);
    // res.setHeader("Content-Type", "image/gif");
    // gif.pipe(res);
    // console.log(res);

    // console.log("Pass");
  } catch (error) {
    res.send("Error");
    console.error(error);
    // console.log("Error");
  }
}
