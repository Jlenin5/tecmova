import { BranchOffice } from "./BranchOfficeInterface"
import { Category } from "./CategoryInterface"
import { ProductImage } from "./ProductImageInterface"
import { SerialNumber } from "./SerialNumberInterface"
import { Unit } from "./UnitInterface"

export interface Product {
    id: number
    SerialNumber: number
    prodNumber: string
    featuredImageId: string
    prodName: string
    prodDescription: string
    Unit: number
    prodStock: number
    prodPurchasePrice: number
    prodSalePrice: number
    prodWidth: number
    prodHeight: number
    prodDepth: number
    prodWeight: number
    prodState: number
    prodWebHome: number
    categories: Category[]
    product_images: ProductImage[]
    serial_number: SerialNumber[]
    unit: Unit[]
    branch_office: BranchOffice[]
}