import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState, useMemo } from "react";
import {
  SellStockType,
  HoldingStockType,
  AccountType,
  AccountJSON,
} from "../types/user_info";
import { usePagination, useTable } from "react-table";

const COLUMNS = [
  {
    Header: "Stock",
    accessor: "stockname",
  },
  {
    Header: "Buy Date",
    accessor: "buy_date",
  },
  {
    Header: "Buy Price",
    accessor: "buy_price",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Buy Total Price",
    accessor: "buy_total_price",
  },
  {
    Header: "Sell Date",
    accessor: "sell_date",
  },
  {
    Header: "Sell Price",
    accessor: "sell_price",
  },
  {
    Header: "Sell Total Price",
    accessor: "sell_total_price",
  },
  {
    Header: "Rate",
    accessor: "rate",
  },
];

type AccountProps = {
  account: string;
};

function AssetStockList({ account }: AccountProps) {
  return <></>;
}

export default AssetStockList;
