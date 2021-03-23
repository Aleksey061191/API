import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import React, { useContext } from "react";
import { WordContext } from "../contexts/colorContext";

const tableConfig = [
  { header: "Word: ", field: "words" },
  { header: "Translate: ", field: "translateWord" }
];

export const WordsList = () => {
  const { words, removeWord} = useContext(WordContext);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableConfig.map((item) => {
            return <TableCell>{item.header}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {words.map((word) => {
          return (
            <TableRow >
              {tableConfig.map((cell) => (
                <TableCell>{word[cell.field]}</TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
