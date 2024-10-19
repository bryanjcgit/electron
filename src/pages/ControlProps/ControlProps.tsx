import ProductCard, { ProductButtons, ProductImg, ProductTitle } from '../../components'
import { products } from '../../data/products'
import '../styles/custom-styles.css'
import { useControlcard } from '../../hooks/useControlCard'


export const ControlProps = () => {

    const { controlCard, onProductCountChange } = useControlcard()

    return (
        <div>
            <h1>Control Props</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={onProductCountChange}
                            value={controlCard[product.id]?.count || 0}
                        >
                            <ProductImg className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }

            </div>

            <div className='shopping-cart'>
                {
                    Object.entries(controlCard).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={onProductCountChange}
                            value={product.count}

                        >
                            <ProductImg className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle title={`${product.count}`} />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>

                    ))
                }

            </div>
        </div>
    )
}
