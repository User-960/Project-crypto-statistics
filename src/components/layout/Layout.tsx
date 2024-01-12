// import localFont from 'next/font/local'
import { FC, Fragment, ReactNode } from 'react'

import TopBar from '../ui/topBar/TopBar'

import Meta from '../seo/Meta'
import { IMeta } from '../seo/meta.interface'

import styles from './Layout.module.scss'

interface ILayoutProps {
	backLink?: string
	children?: ReactNode
	meta: IMeta
}

const Layout: FC<ILayoutProps> = ({ backLink = '/', children, meta }) => {
	return (
		<>
			<Meta title={meta.title} description={meta.description}>
				<div className={styles.mainWrapper}>
					<header className={styles.header}>
						<TopBar />
					</header>

					<main className={styles.contentWrapper}>
						{children && <Fragment>{children}</Fragment>}
					</main>

					<footer className={styles.footer}></footer>
				</div>
			</Meta>
		</>
	)
}

export default Layout
