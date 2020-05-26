import React from 'react';
import { Link } from 'react-router-dom';
import getIconAndColor from '../util/getIconAndColor';

export default function Card ({ snippet, clx = "" }) {
  return (
    <div className={"w-100 card bg-main text-white " + clx}>

      <div className="w-100 h-100 d-flex">
        <div className="mr-3 ml-3 d-flex justify-content-center align-items-center d-none">
          <i className={"fs-70 " + getIconAndColor(snippet.language, 'text-')}></i>
        </div>

        <div>
          <div className="card-body">

            <h5 className="card-title mb-0">
              <Link to={'snippet/' + snippet.title} className="text-white">
                <i className="fa fa-hashtag"></i> {snippet.title.replace(/-/g, ' ')}
              </Link>
            </h5>

            <p className="mt-0 text-muted"><i className="fa fa-tags"></i> {snippet.tags.join(', ')}</p>

            <p className="card-text lead text-muted">{snippet.description}</p>
          </div>
        </div>
      </div>

    </div>
  );
}