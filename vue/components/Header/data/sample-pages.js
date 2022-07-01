import imgAPI from '~/static/images/imgAPI';
import link from '~/static/text/link';

const sample = [
  {
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.agency.about
      },
      {
        name: 'team',
        link: link.agency.team
      },
      {
        name: 'blog',
        link: link.agency.blog
      },
      {
        name: 'blog detail',
        link: link.agency.blogDetail
      }
    ],
  },
  {
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.agency.login
      },
      {
        name: 'register',
        link: link.agency.register
      },
      {
        name: 'contact',
        link: link.agency.contact
      },
      {
        name: 'contact map',
        link: link.agency.contactMap
      }
    ],
  },
  {
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: link.agency.card
      },
      {
        name: 'product',
        link: link.agency.product
      },
      {
        name: 'product detail',
        link: link.agency.productDetail
      }
    ],
  },
  {
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.agency.pricing
      },
      {
        name: 'faq',
        link: link.agency.faq
      },
      {
        name: 'maintenance',
        link: link.agency.maintenance
      },
      {
        name: 'coming soon',
        link: link.agency.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
]

export default sample
