import React from "react";

export const Spinner = () => {
  return (
    <div className="w-screnn h-screen flex items-center justify-center z-50 bg-background">
      <div className="border-background h-20 w-20 animate-spin rounded-FULL border-8 border-t-primary" />
    </div>
  );
};
