import imgAPI from '../images/imgAPI'

const products = [
  {
    title: 'Managed Serverless',
    img: imgAPI.photo[21],
    category: 'cat-a',
    tag: ['Managed', 'Serverless', 'Container', 'Edge'],
    price: 50,
    rating: 5,
    check: 'check-d',
    radio: 'radio-b'
  },
  {
    title: 'Community Clusters',
    img: imgAPI.photo[22],
    category: 'cat-b',
    tag: ['Learn', 'Build', 'Earn'],
    price: 10,
    rating: 2,
    check: 'check-d',
    radio: 'radio-e'
  },
  {
    title: 'Consulting',
    img: imgAPI.photo[23],
    category: 'cat-b',
    tag: ['Corp Training', 'Kubernetes Anywere', 'Confidential workloads', "Industry 4.0"],
    price: 100,
    rating: 5,
    check: 'check-a',
    radio: 'radio-e'
  },
  {
    title: 'Another Service',
    img: imgAPI.photo[28],
    category: 'cat-c',
    tag: ['tag-one', 'tag-four', 'tag-two'],
    price: 70,
    rating: 4,
    check: 'check-a',
    radio: 'radio-a'
  },
 
];

export default products;
