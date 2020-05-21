import * as React from 'react';
import styles from './Table.module.scss';
import { ITableProps } from './ITableProps';
import { escape } from '@microsoft/sp-lodash-subset';
import TableTree from "./CustomTreeTable";

export default class Table extends React.Component<ITableProps, {}> {
  public render(): React.ReactElement<ITableProps> {
    return (
      <TableTree />
      // <div className={ styles.table }>
      //   <div className={ styles.container }>
      //     <div className={ styles.row }>
      //       <div className={ styles.column }>
      //         <span className={ styles.title }>Welcome to SharePoint!</span>
      //         <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
      //         <p className={ styles.description }>{escape(this.props.description)}</p>
      //         <a href="https://aka.ms/spfx" className={ styles.button }>
      //           <span className={ styles.label }>Learn more</span>
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
