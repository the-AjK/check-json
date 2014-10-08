/**
 * File: checkJson.js
 * Module: checkJson
 * Author: Alberto Garbui
 * Created: 08/10/14
 * Version: 0.0.3
 * Description: JSON fields checking
 * Modification History:
 ==============================================
 * Version | Changes
 ==============================================
 * 0.0.1 File creation
 * 0.0.2 added hasString & hasStringNotEmpty
 * 0.0.3 added optionalString & optionalStringNotEmpty
 ==============================================
 */
'use strict';

exports.checkJson = function(data){

	var checkJson = {};
	var errors = [];
	
	var splitFields = function(data, field){
	
		field = field.split('.');
		for(var i=0; i<field.length-1; i++)
		{
			data = data[field[i]];
		}
		field = field[field.length-1];
		
		return [data, field];
	
	}
	
	checkJson.hasStringNotEmpty = function(field){
	
		//gestione campi composti
		var newData = splitFields(data, field);
		var data2check = newData[0];
		field = newData[1];
		
		if(data2check[field] != undefined)
		{
			if(!(typeof data2check[field] == 'string' || data2check[field] instanceof String))
			{
				errors.push('field \'' + field + '\' is not a string');
			}else if(data2check[field] == '')
			{
				errors.push('empty field \'' + field + '\'');
			}			
		}else{
			errors.push('missing field \'' + field + '\'');
		}
		return this;
	}
	
	checkJson.optionalStringNotEmpty = function(field){
	
		//gestione campi composti
		var newData = splitFields(data, field);
		var data2check = newData[0];
		field = newData[1];
		
		if(data2check[field] != undefined)
		{
			if(!(typeof data2check[field] == 'string' || data2check[field] instanceof String))
			{
				errors.push('field \'' + field + '\' is not a string');
			}else if(data2check[field] == '')
			{
				errors.push('empty field \'' + field + '\'');
			}			
		}
		return this;
	}
	
	checkJson.hasString = function(field){
	
		//gestione campi composti
		var newData = splitFields(data, field);
		var data2check = newData[0];
		field = newData[1];
		
		if(data2check[field] != undefined)
		{
			if(!(typeof data2check[field] == 'string' || data2check[field] instanceof String))
			{
				errors.push('field \'' + field + '\' is not a string');
			}		
		}else{
			errors.push('missing field \'' + field + '\'');
		}
		return this;
	}
	
	checkJson.optionalString = function(field){
	
		//gestione campi composti
		var newData = splitFields(data, field);
		var data2check = newData[0];
		field = newData[1];
		
		if(data2check[field] != undefined)
		{
			if(!(typeof data2check[field] == 'string' || data2check[field] instanceof String))
			{
				errors.push('field \'' + field + '\' is not a string');
			}		
		}
		return this;
	}
	
	checkJson.check = function(callback){
		if(errors.length == 0)callback();
		else callback(errors);	
	}
	
	return checkJson;
}
