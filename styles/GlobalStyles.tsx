import React from 'react'
import {createGlobalStyle, css} from 'styled-components'
import tw, {GlobalStyles as BaseStyles} from 'twin.macro'

const CustomStyles = createGlobalStyle({
    body: {
        WebkitTapHighlightColor: "purple",
        ...tw`antialiased`,
    },
})

const GlobalStyles = () => (
    <>
        <BaseStyles/>
        <CustomStyles/>
    </>
)

export default GlobalStyles
