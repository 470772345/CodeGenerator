
  const tableColumns = reactive([
    
    {
      prop: 'Id',
      label: 'Id',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Id}</>
    }
    },
    
    {
      prop: 'Code',
      label: 'Code',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Code}</>
    }
    },
    
    {
      prop: 'Name',
      label: 'Name',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Name}</>
    }
    },
    
    {
      prop: 'TimeZone',
      label: 'TimeZone',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.TimeZone}</>
    }
    },
    
    {
      prop: 'Address_Name',
      label: 'Address_Name',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_Name}</>
    }
    },
    
    {
      prop: 'Address_Company',
      label: 'Address_Company',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_Company}</>
    }
    },
    
    {
      prop: 'Address_Country',
      label: 'Address_Country',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_Country}</>
    }
    },
    
    {
      prop: 'Address_State',
      label: 'Address_State',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_State}</>
    }
    },
    
    {
      prop: 'Address_City',
      label: 'Address_City',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_City}</>
    }
    },
    
    {
      prop: 'Address_ZipCode',
      label: 'Address_ZipCode',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_ZipCode}</>
    }
    },
    
    {
      prop: 'Address_Addr1',
      label: 'Address_Addr1',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_Addr1}</>
    }
    },
    
    {
      prop: 'Address_Addr2',
      label: 'Address_Addr2',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_Addr2}</>
    }
    },
    
    {
      prop: 'Address_Addr3',
      label: 'Address_Addr3',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_Addr3}</>
    }
    },
    
    {
      prop: 'Address_Email',
      label: 'Address_Email',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_Email}</>
    }
    },
    
    {
      prop: 'Address_Phone',
      label: 'Address_Phone',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_Phone}</>
    }
    },
    
    {
      prop: 'Address_Note',
      label: 'Address_Note',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_Note}</>
    }
    },
    
    {
      prop: 'RefNum',
      label: 'RefNum',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.RefNum}</>
    }
    },
    
    {
      prop: 'Version',
      label: 'Version',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Version}</>
    }
    },
    
    {
      prop: 'BOPS_CompanyID',
      label: 'BOPS_CompanyID',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.BOPS_CompanyID}</>
    }
    },
    
    {
      prop: 'CreatorId',
      label: 'CreatorId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.CreatorId}</>
    }
    },
    
    {
      prop: 'CreationTime',
      label: 'CreationTime',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{formatDateTime(row.CreationTime)}</>
    }
    },
    
    {
      prop: 'LastModificationTime',
      label: 'LastModificationTime',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{formatDateTime(row.LastModificationTime)}</>
    }
    },
    
    {
      prop: 'LastModifierId',
      label: 'LastModifierId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.LastModifierId}</>
    }
    },
    
    {
      prop: 'DeletionTime',
      label: 'DeletionTime',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{formatDateTime(row.DeletionTime)}</>
    }
    },
    
    {
      prop: 'DeleterId',
      label: 'DeleterId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.DeleterId}</>
    }
    },
    
    {
      prop: 'IsDelete',
      label: 'IsDelete',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.IsDelete}</>
    }
    },
    
    {
      prop: 'DeletedNote',
      label: 'DeletedNote',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.DeletedNote}</>
    }
    },
    
    {
      prop: 'OwnerPartnerId',
      label: 'OwnerPartnerId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.OwnerPartnerId}</>
    }
    },
    
    {
      prop: 'DefaultOCWAssemblyBinLocationId',
      label: 'DefaultOCWAssemblyBinLocationId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.DefaultOCWAssemblyBinLocationId}</>
    }
    },
    
    {
      prop: 'Address_IsResidential',
      label: 'Address_IsResidential',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.Address_IsResidential}</>
    }
    },
    
    {
      prop: 'DefaultOCWConvertBinLocationId',
      label: 'DefaultOCWConvertBinLocationId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.DefaultOCWConvertBinLocationId}</>
    }
    },
    
    {
      prop: 'DefaultOCWMultiBoxBinLocationId',
      label: 'DefaultOCWMultiBoxBinLocationId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.DefaultOCWMultiBoxBinLocationId}</>
    }
    },
    
    {
      prop: 'AmazonShipProfile_ShipApiRefNum',
      label: 'AmazonShipProfile_ShipApiRefNum',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.AmazonShipProfile_ShipApiRefNum}</>
    }
    },
    
    {
      prop: 'AmazonShipProfile_ShipProfileId',
      label: 'AmazonShipProfile_ShipProfileId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.AmazonShipProfile_ShipProfileId}</>
    }
    },
    
    {
      prop: 'FedExShipProfile_ShipApiRefNum',
      label: 'FedExShipProfile_ShipApiRefNum',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.FedExShipProfile_ShipApiRefNum}</>
    }
    },
    
    {
      prop: 'FedExShipProfile_ShipProfileId',
      label: 'FedExShipProfile_ShipProfileId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.FedExShipProfile_ShipProfileId}</>
    }
    },
    
    {
      prop: 'UPSShipProfile_ShipApiRefNum',
      label: 'UPSShipProfile_ShipApiRefNum',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.UPSShipProfile_ShipApiRefNum}</>
    }
    },
    
    {
      prop: 'UPSShipProfile_ShipProfileId',
      label: 'UPSShipProfile_ShipProfileId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.UPSShipProfile_ShipProfileId}</>
    }
    },
    
    {
      prop: 'IsActive',
      label: 'IsActive',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.IsActive}</>
    }
    },
    
    {
      prop: 'AmazonShipPalletProfile_ShipApiRefNum',
      label: 'AmazonShipPalletProfile_ShipApiRefNum',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.AmazonShipPalletProfile_ShipApiRefNum}</>
    }
    },
    
    {
      prop: 'AmazonShipPalletProfile_ShipProfileId',
      label: 'AmazonShipPalletProfile_ShipProfileId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.AmazonShipPalletProfile_ShipProfileId}</>
    }
    },
    
    {
      prop: 'AmazonWarehouseCode',
      label: 'AmazonWarehouseCode',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.AmazonWarehouseCode}</>
    }
    },
    
    {
      prop: 'SSCCPrefix',
      label: 'SSCCPrefix',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.SSCCPrefix}</>
    }
    },
    
    {
      prop: 'DefaultOBWAssemblyBinLocationId',
      label: 'DefaultOBWAssemblyBinLocationId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.DefaultOBWAssemblyBinLocationId}</>
    }
    },
    
    {
      prop: 'DefaultOBWConvertBinLocationId',
      label: 'DefaultOBWConvertBinLocationId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.DefaultOBWConvertBinLocationId}</>
    }
    },
    
    {
      prop: 'DefaultOBWMultiBoxBinLocationId',
      label: 'DefaultOBWMultiBoxBinLocationId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.DefaultOBWMultiBoxBinLocationId}</>
    }
    },
    
    {
      prop: 'DefaultOBWReLabelBinLocationId',
      label: 'DefaultOBWReLabelBinLocationId',
      minWidth: 120,
      align: 'center',
      render (param: { row: any; index: number }) {
      const { row, index } = param
      return <>{row.DefaultOBWReLabelBinLocationId}</>
    }
    },
    
  ]);
  