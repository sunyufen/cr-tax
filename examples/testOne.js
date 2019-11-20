import React from 'react';
import ReactDOM from 'react-dom';
import Testone from 'cr-tax';
import '../assets/index.less';
import { GSTYJD, PTFPJP } from 'cr-tax';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
reactContainer.style.cssText = `
                                // border: 1px solid #11d0bc;
                                // padding: 10px;
                                // margin-bottom: 10px;
                               `
const boxStyle = {
  // width: 1150,
  // height: 'auto',
  // margin: '0 auto',
  // border: '1px solid green',
}

const taxHeader = {
  number: '2897454',
  code: '4646456',
  date: '20190911',
}
const taxPurchase = {
  name: '南京智慧科技有限公司',
  taxNumber: '142704654502922440',
  addressPhone: '南京南路 123456',
  bank: '',
}
const taxSales = {
  totalB: '贰仟零壹拾叁元柒角陆分',
  totalS: '2013.76',
  name: '衡水华业工业有限公司',
  taxNumber: '789754654444464',
  addressPhone: '运城市运万路幸福庄0350-7878505',
  bank: '农行运城北城支行56600104454502242',
  remark: '',
}
const taxSalesB = {
  totalB: '贰仟零壹拾叁元柒角陆分',
  totalS: '2013.76',
  name: '衡水华业工业有限公司',
  taxNumber: '789754654444464',
  addressPhone: '运城市运万路幸福庄0350-44520505',
  bank: '农行运城北城支行56600104545002242',
  remark: '',
}
const taxDataList = [{
  name: '*钢件*电池阴',
  billNumber: 'ER602EGK6001',
  modelUnit: '个',
  modelCount: '3',
  modelPrice: '3000',
  price: '56125489',
  taxRate: 0.16,
  billTaxValue: '435435.16',
}, {}, {}]

const taxDataListB = [{
  name: '*锻件*通行费通行费通行费',
  carNumber: 'ER602EGK6001',
  type: '个',
  dateStart: '20180108',
  dateEnd: '20180108',
  sum: '3,000.00',
  rate: 0.16,
  tax: '435435.16',
}, {
  name: '*锻件*通行费',
  carNumber: 'ER602EGK6001',
  type: '个',
  dateStart: '20180901',
  dateEnd: '20180901',
  sum: '3,000.00',
  rate: 0.16,
  tax: '435435.16',
}, {}]

const mainData = {
  machineCode: '0001',
  machineNumber: '0002',
  encipher: '0003',
  purchase: '南京智慧科技有限公司',
  purchaseTaxNumber: '45455656',
  carType: '轿车',
  factory: '梅赛德斯',
  origin: '德国',
  certificate: '0004',
  importNumber: '0005',
  inspectionNumber: '0006',
  engineNumber: '0007',
  carNumber: '0008',
  totalB: '壹百万',
  totalS: '¥1,000',
  sales: '0009',
  phone: '00010',
  salesTaxNumber: '00011',
  account: '00012',
  address: '00013',
  bank: '00014',
  rate: '00015',
  tax: '00016',
  chargeTaxCode: '00017',
  notTaxCount: '00018',
  taxCertificate: '00019',
  weight: '00020',
  maxNumber: '00021'
}
const taxList = [{
  name: '餐饮费0',
  modelPrice: '300.00',
  modelCount: '847',
  sum: '1300.00'
}, {
  name: '餐饮费1',
  modelPrice: '800.00',
  modelCount: '847',
  sum: '89900.00'
}]
const taxConfig = {
  billCode: '001',
  billNumber: '002',
  machineNumber: '003',
  machineId: '004',
  sellName: '北京山水集团有限公司',
  sellTaxpayerNumber: '005',
  billDate: '006',
  receivingTeller: '007',
  buyName: '008',
  buyTaxpayerNumber: '009',
  lowerSum: '100',
  upperSum: '101',
}
const taxConfigGS = {
  billCode: '001',
  billNumber: '002',
  industryType: '003',
  billDate: '004',
  machineCode: '005',
  machineId: '006',
  machineNumber: '007',
  taxControlCode: '008',
  payCompany: '009',
  upperSum: '010',
  lowerSum: '011',
  receivingCompany: '012',
  receivingCompanyTaxNumber: '013',
  remark: '014',
}
const taxListGS = [{
  name: '名称',
  modelNumber: '规格',
  modelUnit: '吨',
  modelCount: '100',
  modelPrice: '96.00',
  sum: '9,600.00'
}]

function render(container) {
  ReactDOM.render(
    <div>
      <div style={boxStyle}>
        {/* <Testone
          // taxHeader={taxHeader}
          // taxPurchase={taxPurchase}
          // ticketType={1}
          direction='in'

          taxSales={taxSales}
          taxDataList={taxDataList}
          // mode={'ZZSZYFP'}
          
          // taxSales={taxSalesB}
          // taxDataList={taxDataListB}
          // mode={'ZZSDZPTFP'}
          
          // mode={'JDCXSTYFP'}
          // prefixCls={'cr-tax-c'}
          // mainData={mainData}

          mode={'ZZSPTFP'}
        /> */}
        {/* <PTFPJP taxList={taxList} taxConfig={taxConfig} /> */}
        <GSTYJD taxList={taxListGS} taxConfig={taxConfigGS} />
      </div>
    </div>, container
  )
}

render(reactContainer)