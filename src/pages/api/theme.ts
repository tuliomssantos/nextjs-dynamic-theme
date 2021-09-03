// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ThemeSetup } from "./../../types";

const themeSetup: ThemeSetup = {
  palete: {
    primary: {
      main: "#fc035e",
    },
    secondary: {
      main: "##2cd1ab",
    },
  },
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ theme: themeSetup });
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: "John Doe" });
// }
