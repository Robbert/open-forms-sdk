import { applyPrefix } from '../utils';

const TEMPLATE = `
<div class="${applyPrefix('form-choices')}">
  {% ctx.values.forEach(function(item) { %}
    <div class="${applyPrefix('form-choices__choice')}">
        <div class="${applyPrefix('checkbox')}">
              <{{ctx.input.type}}
                ref="input"

                {% for (var attr in ctx.input.attr) { %}
                  {{attr}}="{{ctx.input.attr[attr]}}"
                {% } %}

                value="{{item.value}}"

                {% if (ctx.value && (ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value]))) { %}
                  checked=true
                {% } %}

                {% if (item.disabled) { %}
                  disabled=true
                {% } %}

                id="{{ctx.id}}{{ctx.row}}-{{item.value}}"
              >
                {{ctx.input.content}}
            </{{ctx.input.type}}>

            <div class="${applyPrefix('checkbox__checkmark')}"></div>

            {% if (!ctx.component.optionsLabelPosition || ctx.component.optionsLabelPosition === 'right' || ctx.component.optionsLabelPosition === 'bottom') { %}
                <label class="${applyPrefix('checkbox__label')}" for="{{ctx.id}}{{ctx.row}}-{{item.value}}">{{ctx.t(item.label)}}</label>
            {% } %}
        </div>
    </div>
      {% }) %}
</div>
`;

export default TEMPLATE;