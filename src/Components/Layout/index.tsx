interface LayoutProps {
  children: JSX.Element
}

function Layout({children}: LayoutProps) {
  return (
    <div className='flex flex-col items-center mt-20'>
      {children}
    </div>
  )
}

export {Layout}