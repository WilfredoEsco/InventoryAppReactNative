import * as React from 'react';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const Datatable = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title >STK</DataTable.Title>
        <DataTable.Title >Year</DataTable.Title>
        <DataTable.Title >Model</DataTable.Title>
        <DataTable.Title >Part</DataTable.Title>
        <DataTable.Title >Location</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
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


      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
  );
}

export default Datatable;