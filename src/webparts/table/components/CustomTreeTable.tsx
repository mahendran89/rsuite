import React from "react";
import { Table, Checkbox, Button, DOMHelper, Icon } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
import TablePagination from "rsuite/lib/Table/TablePagination";
//import 'rsuite-table/dist/css/rsuite-table.css'
//import "rsuite/dist/styles/rsuite.min.css";
// import { Table,Input } from 'antd';
// import styles from "./index.less";
import './App.css';
const { Column, HeaderCell, Cell, Pagination } = Table;
const { addClass, scrollTop } = DOMHelper;

let data = [
  {
    id: "1",
    labelName: "Car",
    status: "ENABLED",
    children: [
      {
        id: "1-1",
        labelName: "Mercedes Benz",
        status: "ENABLED",
        count: 460
      },
      {
        id: "1-2",
        labelName: "BMW",
        status: "ENABLED",
        children: [
          {
            id: "1-2-1",
            labelName: "2 series",
            status: "ENABLED",
            count: 103,
            children: [
              {
                id: "1-2-1-1",
                labelName: "Sporty hatchback",
                status: "DISABLED",
                count: 502
              },
              {
                id: "1-2-1-2",
                labelName: "Coupe",
                status: "ENABLED",
                count: 502
              },
              {
                id: "1-2-1-3",
                labelName: "Roadster",
                status: "DISABLED"
              },
              {
                id: "1-2-1-4",
                labelName: "Multi-function wagon",
                status: "DISABLED"
              },
              {
                id: "1-2-1-5",
                labelName: "Station wagon",
                status: "DISABLED",
                count: 34
              }
            ]
          },
          {
            id: "1-2-2",
            labelName: "The intention of customers",
            status: "ENABLED",
            count: 364,
            children: [
              {
                id: "1-2-2-1",
                labelName: "Financial plan",
                status: "DISABLED"
              },
              {
                id: "1-2-2-2",
                labelName: "Appointment test drive",
                status: "ENABLED"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "2",
    labelName: "Game",
    status: "ENABLED",
    count: 834,
    children: [
      {
        id: "2-1",
        labelName: "Online game",
        status: "DISABLED"
      },
      {
        id: "2-2",
        labelName: "Mobile game",
        status: "ENABLED"
      }
    ]
  },
  {
    id: "3",
    labelName: "Digital",
    status: "ENABLED",
    count: 534,
    children: [
      {
        id: "3-1",
        labelName: "Mobile phone",
        status: "ENABLED",
        children: []
      },
      {
        id: "3-2",
        labelName: "Computer",
        status: "DISABLED"
      },
      {
        id: "3-3",
        labelName: "Watch",
        status: "ENABLED"
      }
    ]
  }
];

class TableTree extends React.Component<any,any> {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      height: 500,
      displayLength: 10,
      loading: false,
      page: 1,
      rowId:null
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeLength = this.handleChangeLength.bind(this);
  }
  changeHeight = () => {
    const cur_height = this.state.height;
    this.setState({
      height: cur_height === 400 ? 200 : 400
    });
  };
  handleChangePage(dataKey) {
    this.setState({
      page: dataKey
    });
  }

  handleChangeLength(dataKey) {
    this.setState({
      page: 1,
      displayLength: dataKey
    });
  }

  getData() {
    const { displayLength, page } = this.state;

    return data.filter((v, i) => {
      const start = displayLength * (page - 1);
      const end = start + displayLength;
      return i >= start && i < end;
    });
  }
  // addData = () => {
  //   debugger;
  //   const cur_data = [...this.state.data, ...this.state.data];
  //   console.table(this.state.data);
  //   this.setState(
  //     {
  //       data: cur_data
  //     },
  //     () => {
  //       console.table(this.state.data);
  //     }
  //   );
  // };
 
  render() {
    //const { data, height } = this.state;
    const data = this.getData();
    const { loading, displayLength, page, height } = this.state;

    return (
      <div>
        <Button
          onClick={this.changeHeight}
        >{`Change Height${height}`}</Button>
        {/* <Button onClick={this.addData}>添加数据</Button> */}
        <Table
        rowClassName={rowData => {
          if (this.state.rowId && rowData && rowData.id == this.state.rowId) {
            return 'custom-row-select';
          }
          return 'default-row';
        }}
          isTree
          virtualized
          rowKey="id"
          height={height}
          data={data}
          onExpandChange={(isOpen, rowData) => {
            console.log(isOpen, rowData);
          }}
          defaultExpandedRowKeys = {["1","1-1"]}
          onRowClick = {(rowData) =>{
            if(this.state.rowId!=rowData.id)
             this.setState({rowId:rowData.id})
             else
             this.setState({rowId:null})
          }}

          // renderTreeToggle={(icon, rowData) => {
          //   if (rowData.children && rowData.children.length === 0) {
          //     return <Icon icon="spinner" spin />;
          //   }
          //   return icon;
          // }}
        >
          <Column width={400}>
            <HeaderCell>Label</HeaderCell>
            <Cell dataKey="labelName" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>

          <Column width={100}>
            <HeaderCell>Status</HeaderCell>
            <Cell dataKey="status" />
          </Column>
        </Table>
        <TablePagination
          lengthMenu={[
            {
              value: 10,
              label: 10
            },
            {
              value: 20,
              label: 20
            }
          ]}
          activePage={page}
          displayLength={displayLength}
          total={data.length}
          onChangePage={this.handleChangePage}
          onChangeLength={this.handleChangeLength}
        />
      </div>
    );
  }
}

export default TableTree
