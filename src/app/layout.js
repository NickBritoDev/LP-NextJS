/* eslint-disable react/prop-types */
'use client'
import React from 'react'
import { Providers } from '@/app/provider'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children
}) {
  return (
    <html lang='en'>
      <body style={{ overflow: 'hidden' }}>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
