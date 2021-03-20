import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from 'kebabfinance-uikit'

const CoreTag = () => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const CommunityTag = () => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />}>
    Community
  </Tag>
)

const BinanceTag = () => (
  <Tag variant="binance" outline startIcon={<BinanceIcon />}>
    Binance
  </Tag>
)

const Defcon1 = () => (
  <Tag variant="textSubtle" outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const Defcon2 = () => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const Defcon3 = () => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const Defcon4 = () => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const Defcon5 = () => (
  <Tag variant="binance" outline startIcon={<CommunityIcon />}>
    Core
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, Defcon1, Defcon2, Defcon3, Defcon4, Defcon5 }
