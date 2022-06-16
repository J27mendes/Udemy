import $, { Callbacks } from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(Callback){
    if(!loadHtmlSuccessCallbacks.includes(Callback)){
        loadHtmlSuccessCallbacks.push(Callback)
    }
}

function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallbacks.forEach(Callback => Callback(data))
                loadIncludes(e)
            }
        })
    })
}