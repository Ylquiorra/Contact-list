import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import Loader from '@/shared/ui/Loader';

interface IPageLoaderProps {
    className?: string;
}

const PageLoader: React.FC<IPageLoaderProps> = memo(
    ({ className }: IPageLoaderProps): JSX.Element => {
        return (
            <div className={classNames(cls.PageLoader, {}, [className])}>
                <Loader />
            </div>
        );
    },
);

export default PageLoader;
