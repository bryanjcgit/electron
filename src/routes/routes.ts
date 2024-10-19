import { lazy, LazyExoticComponent } from "react"
import { NoLazy } from "../no-found/NoLazy"
import { ShoppingPage } from "../pages/ShoppingPage/ShoppingPage"
import { ControlProps } from "../pages/ControlProps/ControlProps"
import { FormFormik } from "../pages/Forms/FormFormik"
import { Forms } from "../pages/Forms/Forms"
import { FormFormikYup } from "../pages/Forms/FormFormikYup"
import { FormFormikComponents } from "../pages/Forms/FormFormikComponents"
import { FormikAbstraction } from "../pages/Forms/FormikAbstraction"
import { DynamicForm } from "../pages/Forms/DynamicForm"

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    name: string,
    Component:  LazyExoticComponent< JSXComponent> | JSXComponent
}


const LazyLayout = lazy( () => import('../layout/LazyLayout') )


export const routes: Route[] = [
    {
        path: 'lazyload/*',
        to: './lazyload',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        path: 'shopping/*',
        to: './shopping',
        Component: ShoppingPage,
        name: 'Shopping'
    },
    {
        to: './no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    {
        to: './control',
        path: 'control',
        Component: ControlProps,
        name: 'Control Props'
    },
    {
        to: './forms',
        path: 'forms',
        Component: Forms,
        name: 'Form Custom'
    },
    {
        to: './formFormikBasic',
        path: 'formFormikBasic',
        Component: FormFormik,
        name: 'Register Formik Basic'
    },
    {
        to: './formFormikYup',
        path: 'formFormikYup',
        Component: FormFormikYup,
        name: 'Form an Yup'
    },
    {
        to: './formFormikComponentes',
        path: 'formFormikComponentes',
        Component: FormFormikComponents,
        name: 'Form an Yup Components'
    },
    {
        to: './formikAbstraction',
        path: 'formikAbstraction',
        Component: FormikAbstraction,
        name: 'Formik Abstraction'
    },
    {
        to: './dynamicForm',
        path: 'dynamicForm',
        Component: DynamicForm,
        name: 'Formik Dynamic'
    },

]