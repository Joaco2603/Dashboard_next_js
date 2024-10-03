"use client";

import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.count.count);

  return (
    <>
      <SimpleWidget
        subTitle="Productos agregados"
        title={isCart.toString()}
        label="Contador"
        icon={<IoCartOutline size={20} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </>
  );
};
