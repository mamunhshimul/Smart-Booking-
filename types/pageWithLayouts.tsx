import { NextPage } from 'next'
import type { ReactElement } from 'react'
import LandingLayout from '../components/layouts/landing'
import MainLayout from '../components/layouts/main'
import AdminLayout from '../components/layouts/admin'
export type PageWithLandingLayoutType = NextPage & { layout: typeof LandingLayout }
export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }
export type PageWithAdminLayoutType = NextPage & { layout: typeof AdminLayout }
export type PageWithLayoutType =
 | PageWithLandingLayoutType
 | PageWithMainLayoutType
 | PageWithAdminLayoutType
export type LayoutProps = ({
 children,
}: {
 children: ReactElement
}) => ReactElement
export default PageWithLayoutType