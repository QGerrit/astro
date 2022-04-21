import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-spinner',
    styleUrl: 'rux-spinner.scss',
    shadow: true,
})
export class RuxSpinner {
    render() {
        return (
            <Host>
                <div class="rux-spinner-wrapper" part="wrapper">
                    <div class="rux-spinner-first" part="first">
                        <div class="rux-spinner-second" part="second">
                            <div class="rux-spinner-third" part="third"></div>
                        </div>
                    </div>
                </div>
                <slot></slot>
            </Host>
        )
    }
}
