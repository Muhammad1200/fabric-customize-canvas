const TextToolHtml = `
<div class="form-group col-12">
                <label for="">Fill Color</label>
                <input type="color" class="form-control" onchange="onSetProperties(event);" name="fill">
            </div>
            <div class="form-group col-12">
                <label for="">Font Size</label>
                <input type="number" class="form-control" onchange="onSetProperties(event);" name="fontSize">
            </div>
            <div class="form-group col-12">
                <label for="">Font Faimly</label>
                <select name="fontFamily" onchange="onSetProperties(event);" class="form-control" id="">
                    <option value="">Select Faimly</option>
                    ${
                        fontFaimly.map((val,key)=>(
                            `<option value="${val}">${val}</option>`
                        ))
                    }
                </select>
            </div>
            <div class="form-group col-12">
                <label for="">Font Weight</label>
                <select name="fontWeight" onchange="onSetProperties(event);" class="form-control" id="">
                    <option value="">Select Weight</option>
                    ${
                        fontWeight.map((val,key)=>(
                            `<option value="${val?.value}">${val.name}</option>`
                        ))
                    }
                </select>
            </div>
            <div class="form-group col-12">
                <label for="">Font Style</label>
                <select name="fontStyle" onchange="onSetProperties(event);" class="form-control" id="">
                    <option value="">Select Style</option>
                    ${
                        fontStyle.map((val,key)=>(
                            `<option value="${val}">${val}</option>`
                        ))
                    }
                </select>
            </div>
            <div class="form-group col-12">
                <label for="">Character Spacing</label>
                <input type="number" onchange="onSetProperties(event);" class="form-control" name="charSpacing">
            </div>
            <div class="form-group col-12">
                <label for="">Text Align</label>
                <select name="textAlign" onchange="onSetProperties(event);" class="form-control">
                    <option value="">Select Align</option>
                    ${
                        textAlign.map((val,key)=>(
                            `<option value="${val}">${val}</option>`
                        ))
                    }
                </select>
</div>
`;


const setValues = (object) => {
    ['fill','fontSize','charSpacing','fontSize'].map((val)=>{
        $(`#ITextTool input[name=${val}]`).val(object[val]);
    });

    ['textAlign','fontStyle','fontWeight','fontFamily'].map((val)=>{
        $(`#ITextTool select[name=${val}]`).val(object[val]);
    });
}