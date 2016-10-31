import React from 'react'
import './NotFound.less'

function NotFound() {
        return (
                <div className="notfound-normal">
                        <div className="notfound-container">
                                <h1 className="notfound-title">404</h1>
                                <p className="notfound-desc">未找到该页面</p>
                                <a href="/">返回首页</a>
                        </div>
                </div>
        )
}

export default NotFound
