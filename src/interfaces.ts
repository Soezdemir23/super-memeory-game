import React from "react";


//App.tsx
export interface pepeObject {
    id: string
    url: string
    pressed: boolean
  }

//Main.tsx
export interface cardProps {
    urls: null | pepeObject[] | undefined;
    onClick: React.MouseEventHandler<HTMLDivElement> ;
  }
  