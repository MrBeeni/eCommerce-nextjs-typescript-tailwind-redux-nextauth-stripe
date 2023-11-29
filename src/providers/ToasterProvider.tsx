"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{ duration: 1500 }}
    />
  );
};

export default ToasterProvider;
