import axios from "axios";

export const sendContactMail = async (userName, senderMail, content) => {
  const data = {
    userName,
    senderMail,
    content,
  };

  try {
    return await axios.post("/api/contact", data);
  } catch (error) {
    return error;
  }
};
