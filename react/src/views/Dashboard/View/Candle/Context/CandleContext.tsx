import { createContext, useContext } from "react"

export type ICandleId = string

export const CandleIdContext = createContext<ICandleId>("")
export const useCandleIdContext = () => useContext(CandleIdContext)