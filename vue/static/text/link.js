const redirect = '/dashboard'

const link = {
  agency: {
    home: '/',
    about: '/about',
    team: '/about/team',
    blog: '/blog',
    blogDetail: '/blog/detail-blog',
    login: '/login?redirect=' + redirect,
    register: '/register?redirect=' + redirect,
    contact: '/contact',
    contactMap: '/contact/with-map',
    card: '/collection',
    product: '/collection/products',
    productDetail: '/collection/detail-product',
    pricing: '/utils/pricing',
    faq: '/utils/faq',
    maintenance: '/utils/maintenance',
    comingSoon: '/utils/coming-soon'
  }
}

export default link
