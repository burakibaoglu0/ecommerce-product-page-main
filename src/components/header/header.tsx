import { headerItems } from "../../helpers/enums"
import './header.scss'

const Header = () => {
    return (
        <header>
            {headerItems.map(wrapper => 
                <div className={'header-' + wrapper.pos}>
                    {wrapper.items.map(item => 
                        <button className="header-item-button" key={item.path}>
                            <a className="header-item-link" href={item.path}>
                                {item.isImage ? 
                                    <img className="header-item-image" src={item.src} alt={item.alt} />
                                    :
                                    <span className="header-item-text">{item.title}</span>
                                }
                            </a>
                        </button>
                    )}
                </div>
            )}
        </header>
    )
}

export default Header;