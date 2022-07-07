import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Pressable } from 'react-native';



const Datatable = () => {

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title >STK</DataTable.Title>
        <DataTable.Title >Year</DataTable.Title>
        <DataTable.Title >Model</DataTable.Title>
        <DataTable.Title >Part</DataTable.Title>
        <DataTable.Title >Location</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row >
        <DataTable.Cell>420</DataTable.Cell>
        <DataTable.Cell >2008</DataTable.Cell>
        <DataTable.Cell >Silverado</DataTable.Cell>
        <DataTable.Cell >Starter</DataTable.Cell>
        <DataTable.Cell >D5-5</DataTable.Cell>
      </DataTable.Row>
   
      <DataTable.Row>
        <DataTable.Cell>421</DataTable.Cell>
        <DataTable.Cell >2010</DataTable.Cell>
        <DataTable.Cell >F150</DataTable.Cell>
        <DataTable.Cell >Starter</DataTable.Cell>
        <DataTable.Cell >D5-5</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>401</DataTable.Cell>
        <DataTable.Cell >2000</DataTable.Cell>
        <DataTable.Cell >F150</DataTable.Cell>
        <DataTable.Cell >Engine</DataTable.Cell>
        <DataTable.Cell >E5-5</DataTable.Cell>
      </DataTable.Row>


   
    </DataTable>
  );
}

export default Datatable;