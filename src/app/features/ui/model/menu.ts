import { NavItem } from './nav-item';
import { TranslateService } from '@ngx-translate/core';

export let menu: NavItem[] = [
  {
    // displayName: 'Home',
    displayName: 'sidebar.Dashboard',
    iconName: 'dashboard',
    route: 'procurement/home',
    isActive: 0
  },
  {
    // displayName: 'Home',
    displayName: 'sidebar.FED/Agency',
    iconName: 'business',
    route: 'procurement/fedAgency',
    isActive: 0
  },
  // {
  //   displayName: 'PACS',
  //   iconName: 'class',
  //   route: 'procurement/pacs',
  //   isActive: 0
  // },
  {
    // displayName: 'PACS / Branch',
    displayName: 'sidebar.PACS/Associates',
    iconName: 'engineering',
    route: 'procurement/fpc-branch',
    isActive: 0
  },
  {
    // displayName: 'Farmer',
    displayName: 'sidebar.Farmer',
    iconName: 'person',
    route: 'procurement/farmer',
    isActive: 0
  },
  {
    // displayName: 'Warehouse',
    displayName: 'sidebar.Collection Center',
    iconName: 'house',
    route: 'procurement/warehouse',
    isActive: 0
  },
  {
    // displayName: 'Procurement',
    displayName: 'sidebar.Procurement',
    iconName: 'class',
    route: 'procurement/procurement',
    isActive: 0
  },
  // {
  //   displayName: 'sidebar.Procurement Vs Payable',
  //   iconName: 'class',
  //   route: 'procurement/procurementvspayable',
  //   isActive: 0
  // },

  {
    // displayName: 'Process Payment Details',
    displayName: 'sidebar.Process Payment',
    iconName: 'forum',
    route: 'procurement/process-payment',
    isActive: 0
  },

  {
    displayName: 'sidebar.Transporter',
    iconName: 'directions_wal',
    route: 'procurement/transporter',
    isActive: 0
  },
  {
    displayName: 'sidebar.Dispatch',
    iconName: 'payment',
    route: 'procurement/dispatch',
    isActive: 0
  },
  {
    displayName: 'Approve Payment',
    iconName: 'assignment',
    route: 'procurement/approvepayment',
    isActive: 0,
    children: [
      {
        // displayName: 'PACS / Branch',
        displayName: 'Approve Payments',
        iconName: 'engineering',
        route: 'procurement/approvepayment/approvepayment',
        isActive: 0,
      },
      {
        // displayName: 'PACS / Branch',
        displayName: 'Hold Payments',
        iconName: 'engineering',
        route: 'procurement/approvepayment/holdpayments',
        isActive: 0,
      },
    ]
  },
  // {
  //   displayName: 'sidebar.Update Payment',
  //   iconName: 'forum',
  //   route: 'procurement/update-payment',
  //   isActive: 0
  // },
  // {
  //   displayName: 'sidebar.Approvals',
  //   iconName: 'assignment_late',
  //   route: 'procurement/approvals',
  //   isActive: 0,
  //   children: [
  //     {
  //       displayName: 'sidebar.Procurement',
  //       iconName: 'supervisor_account',
  //       route: 'procurement/approvals/procurementapprovals',
  //       isActive: 0,
  //     },
  //   ]
  // },
  {
    displayName: 'sidebar.Reports',
    iconName: 'assignment',
    route: 'procurement/report',
    isActive: 0,
    children: [
      {
        // displayName: 'PACS / Branch',
        displayName: 'sidebar.PACS/Associates',
        iconName: 'engineering',
        route: 'procurement/report/fpcbranch',
        isActive: 0,
      },
      {
        displayName: 'sidebar.Farmer',
        iconName: 'person',
        route: 'procurement/report/farmer',
        isActive: 0,
      },
      {
        displayName: 'sidebar.Dispatch',
        iconName: 'payment',
        route: 'procurement/report/dispatch',
        isActive: 0,
      },
      {
        displayName: 'sidebar.Procurement',
        iconName: 'class',
        route: 'procurement/report/procurement',
        isActive: 0,
      },
      {
        displayName: 'sidebar.Payment Summary',
        iconName: 'payment',
        route: 'procurement/report/paymentsummary',
        isActive: 0,
      },
      {
        displayName: 'sidebar.Procurement Payment Summary',
        iconName: 'class',
        route: 'procurement/report/Procurementpaymentreport',
        isActive: 0,
      },
      // {
      //   displayName: 'sidebar.Procurement Status',
      //   iconName: 'feedback',
      //   route: 'procurement/report/procurementstatus',
      //   isActive: 0,
      // },
    ]
  }
];

export function translateMenuItems(menu: NavItem[], translate: TranslateService): NavItem[] {
  // Translate the display names of each menu item
  menu.forEach(item => {
    translate.get(item.displayName).subscribe((translation: string) => {
      item.displayName = translation;
    });
  });
  console.log(menu);


  return menu;
}
