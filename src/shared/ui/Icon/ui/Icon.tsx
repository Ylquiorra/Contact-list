import React, { JSX } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import TestProps from '@/shared/types/tests'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IIconPropsBase extends SvgProps, TestProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

interface IIconPropsNonClickable extends IIconPropsBase {
  clickable?: false
}

interface IIconPropsClickable extends IIconPropsBase {
  clickable: true
  onClick: () => void
}

type IconProps = IIconPropsNonClickable | IIconPropsClickable

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    'data-testid': dataTestId = 'Icon',
    ...otherProps
  } = props

  const icon = (
    <Svg
      {...otherProps}
      width={width}
      height={height}
      data-testid={dataTestId}
      className={classNames(cls.Icon, {}, [className])}
      onClick={undefined}
    />
  )

  if (clickable) {
    return (
      <button
        data-testid={dataTestId}
        className={classNames(cls.button, {}, [className])}
        onClick={props.onClick}
        type={'button'}
        style={{ height, width }}
      >
        {icon}
      </button>
    )
  }

  return icon
}

export default Icon
