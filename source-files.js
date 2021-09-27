var N = null;var sourcesIndex = {};
sourcesIndex["agnostic_orderbook"] = {"name":"","dirs":[{"name":"processor","files":["cancel_order.rs","close_market.rs","consume_events.rs","create_market.rs","new_order.rs"]}],"files":["critbit.rs","entrypoint.rs","error.rs","instruction.rs","lib.rs","orderbook.rs","processor.rs","state.rs","utils.rs"]};
sourcesIndex["ahash"] = {"name":"","files":["convert.rs","fallback_hash.rs","lib.rs","operations.rs","random_state.rs","specialize.rs"]};
sourcesIndex["aho_corasick"] = {"name":"","dirs":[{"name":"packed","dirs":[{"name":"teddy","files":["compile.rs","mod.rs","runtime.rs"]}],"files":["api.rs","mod.rs","pattern.rs","rabinkarp.rs","vector.rs"]}],"files":["ahocorasick.rs","automaton.rs","buffer.rs","byte_frequencies.rs","classes.rs","dfa.rs","error.rs","lib.rs","nfa.rs","prefilter.rs","state_id.rs"]};
sourcesIndex["arrayref"] = {"name":"","files":["lib.rs"]};
sourcesIndex["arrayvec"] = {"name":"","files":["array.rs","array_string.rs","char.rs","errors.rs","lib.rs","maybe_uninit.rs"]};
sourcesIndex["atty"] = {"name":"","files":["lib.rs"]};
sourcesIndex["base64"] = {"name":"","dirs":[{"name":"read","files":["decoder.rs","mod.rs"]},{"name":"write","files":["encoder.rs","mod.rs"]}],"files":["chunked_encoder.rs","decode.rs","display.rs","encode.rs","lib.rs","tables.rs"]};
sourcesIndex["bincode"] = {"name":"","dirs":[{"name":"config","files":["endian.rs","int.rs","legacy.rs","limit.rs","mod.rs","trailing.rs"]},{"name":"de","files":["mod.rs","read.rs"]},{"name":"ser","files":["mod.rs"]}],"files":["byteorder.rs","error.rs","internal.rs","lib.rs"]};
sourcesIndex["blake3"] = {"name":"","files":["ffi_avx2.rs","ffi_avx512.rs","ffi_sse2.rs","ffi_sse41.rs","guts.rs","join.rs","lib.rs","platform.rs","portable.rs","traits.rs"]};
sourcesIndex["block_buffer"] = {"name":"","files":["lib.rs"]};
sourcesIndex["block_padding"] = {"name":"","files":["lib.rs"]};
sourcesIndex["borsh"] = {"name":"","dirs":[{"name":"de","files":["hint.rs","mod.rs"]},{"name":"ser","files":["helpers.rs","mod.rs"]}],"files":["lib.rs","schema.rs","schema_helpers.rs"]};
sourcesIndex["borsh_derive"] = {"name":"","files":["lib.rs"]};
sourcesIndex["borsh_derive_internal"] = {"name":"","files":["attribute_helpers.rs","enum_de.rs","enum_ser.rs","lib.rs","struct_de.rs","struct_ser.rs","union_de.rs","union_ser.rs"]};
sourcesIndex["borsh_schema_derive_internal"] = {"name":"","files":["enum_schema.rs","helpers.rs","lib.rs","struct_schema.rs"]};
sourcesIndex["bs58"] = {"name":"","files":["alphabet.rs","decode.rs","encode.rs","lib.rs"]};
sourcesIndex["bv"] = {"name":"","dirs":[{"name":"adapter","files":["bit_concat.rs","bit_fill.rs","bit_slice_adapter.rs","bool_adapter.rs","logic.rs","mod.rs"]},{"name":"bit_vec","files":["impls.rs","inner.rs","mod.rs"]},{"name":"traits","files":["bit_sliceable.rs","bits.rs","bits_ext.rs","bits_mut.rs","bits_mut_ext.rs","bits_push.rs","mod.rs"]}],"files":["array_n_impls.rs","iter.rs","lib.rs","macros.rs","prims.rs","range_compat.rs","slice.rs","storage.rs"]};
sourcesIndex["bytemuck"] = {"name":"","files":["contiguous.rs","lib.rs","offset_of.rs","pod.rs","transparent.rs","zeroable.rs"]};
sourcesIndex["byteorder"] = {"name":"","files":["io.rs","lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["constant_time_eq"] = {"name":"","files":["lib.rs"]};
sourcesIndex["cpufeatures"] = {"name":"","files":["lib.rs","x86.rs"]};
sourcesIndex["crunchy"] = {"name":"","files":["lib.rs"]};
sourcesIndex["crypto_mac"] = {"name":"","files":["errors.rs","lib.rs"]};
sourcesIndex["curve25519_dalek"] = {"name":"","dirs":[{"name":"backend","dirs":[{"name":"serial","dirs":[{"name":"curve_models","files":["mod.rs"]},{"name":"scalar_mul","files":["mod.rs","pippenger.rs","precomputed_straus.rs","straus.rs","variable_base.rs","vartime_double_base.rs"]},{"name":"u64","files":["constants.rs","field.rs","mod.rs","scalar.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["constants.rs","edwards.rs","field.rs","lib.rs","macros.rs","montgomery.rs","prelude.rs","ristretto.rs","scalar.rs","traits.rs","window.rs"]};
sourcesIndex["derivative"] = {"name":"","files":["ast.rs","attr.rs","bound.rs","clone.rs","cmp.rs","debug.rs","default.rs","hash.rs","lib.rs","matcher.rs","paths.rs","utils.rs"]};
sourcesIndex["dex_v3"] = {"name":"","dirs":[{"name":"processor","files":["cancel_order.rs","close_account.rs","close_market.rs","consume_events.rs","create_market.rs","initialize_account.rs","new_order.rs","settle.rs","sweep_fees.rs"]}],"files":["entrypoint.rs","error.rs","instruction.rs","lib.rs","processor.rs","state.rs","utils.rs"]};
sourcesIndex["digest"] = {"name":"","files":["digest.rs","dyn_digest.rs","errors.rs","fixed.rs","lib.rs","variable.rs","xof.rs"]};
sourcesIndex["either"] = {"name":"","files":["lib.rs"]};
sourcesIndex["enumflags2"] = {"name":"","files":["fallible.rs","formatting.rs","lib.rs"]};
sourcesIndex["enumflags2_derive"] = {"name":"","files":["lib.rs"]};
sourcesIndex["env_logger"] = {"name":"","dirs":[{"name":"filter","files":["mod.rs","regex.rs"]},{"name":"fmt","dirs":[{"name":"humantime","files":["extern_impl.rs","mod.rs"]},{"name":"writer","dirs":[{"name":"termcolor","files":["extern_impl.rs","mod.rs"]}],"files":["atty.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["generic_array"] = {"name":"","files":["arr.rs","functional.rs","hex.rs","impl_serde.rs","impls.rs","iter.rs","lib.rs","sequence.rs"]};
sourcesIndex["getrandom"] = {"name":"","files":["error.rs","error_impls.rs","lib.rs","macos.rs","use_file.rs","util.rs","util_libc.rs"]};
sourcesIndex["hashbrown"] = {"name":"","dirs":[{"name":"external_trait_impls","files":["mod.rs"]},{"name":"raw","files":["bitmask.rs","mod.rs","sse2.rs"]}],"files":["lib.rs","macros.rs","map.rs","scopeguard.rs","set.rs"]};
sourcesIndex["hex"] = {"name":"","files":["error.rs","lib.rs"]};
sourcesIndex["hmac"] = {"name":"","files":["lib.rs"]};
sourcesIndex["hmac_drbg"] = {"name":"","files":["lib.rs"]};
sourcesIndex["humantime"] = {"name":"","files":["date.rs","duration.rs","lib.rs","wrapper.rs"]};
sourcesIndex["itertools"] = {"name":"","dirs":[{"name":"adaptors","files":["mod.rs","multi_product.rs"]}],"files":["combinations.rs","combinations_with_replacement.rs","concat_impl.rs","cons_tuples_impl.rs","diff.rs","either_or_both.rs","exactly_one_err.rs","format.rs","free.rs","group_map.rs","groupbylazy.rs","impl_macros.rs","intersperse.rs","kmerge_impl.rs","lazy_buffer.rs","lib.rs","merge_join.rs","minmax.rs","multipeek_impl.rs","pad_tail.rs","peeking_take_while.rs","permutations.rs","process_results_impl.rs","put_back_n_impl.rs","rciter_impl.rs","repeatn.rs","size_hint.rs","sources.rs","tee.rs","tuple_impl.rs","unique_impl.rs","with_position.rs","zip_eq_impl.rs","zip_longest.rs","ziptuple.rs"]};
sourcesIndex["keccak"] = {"name":"","files":["lib.rs"]};
sourcesIndex["lazy_static"] = {"name":"","files":["core_lazy.rs","lib.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"unix","dirs":[{"name":"bsd","dirs":[{"name":"apple","dirs":[{"name":"b64","dirs":[{"name":"x86_64","files":["align.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["fixed_width_ints.rs","lib.rs","macros.rs"]};
sourcesIndex["libm"] = {"name":"","dirs":[{"name":"math","files":["acos.rs","acosf.rs","acosh.rs","acoshf.rs","asin.rs","asinf.rs","asinh.rs","asinhf.rs","atan.rs","atan2.rs","atan2f.rs","atanf.rs","atanh.rs","atanhf.rs","cbrt.rs","cbrtf.rs","ceil.rs","ceilf.rs","copysign.rs","copysignf.rs","cos.rs","cosf.rs","cosh.rs","coshf.rs","erf.rs","erff.rs","exp.rs","exp10.rs","exp10f.rs","exp2.rs","exp2f.rs","expf.rs","expm1.rs","expm1f.rs","expo2.rs","fabs.rs","fabsf.rs","fdim.rs","fdimf.rs","fenv.rs","floor.rs","floorf.rs","fma.rs","fmaf.rs","fmax.rs","fmaxf.rs","fmin.rs","fminf.rs","fmod.rs","fmodf.rs","frexp.rs","frexpf.rs","hypot.rs","hypotf.rs","ilogb.rs","ilogbf.rs","j0.rs","j0f.rs","j1.rs","j1f.rs","jn.rs","jnf.rs","k_cos.rs","k_cosf.rs","k_expo2.rs","k_expo2f.rs","k_sin.rs","k_sinf.rs","k_tan.rs","k_tanf.rs","ldexp.rs","ldexpf.rs","lgamma.rs","lgamma_r.rs","lgammaf.rs","lgammaf_r.rs","log.rs","log10.rs","log10f.rs","log1p.rs","log1pf.rs","log2.rs","log2f.rs","logf.rs","mod.rs","modf.rs","modff.rs","nextafter.rs","nextafterf.rs","pow.rs","powf.rs","rem_pio2.rs","rem_pio2_large.rs","rem_pio2f.rs","remainder.rs","remainderf.rs","remquo.rs","remquof.rs","round.rs","roundf.rs","scalbn.rs","scalbnf.rs","sin.rs","sincos.rs","sincosf.rs","sinf.rs","sinh.rs","sinhf.rs","sqrt.rs","sqrtf.rs","tan.rs","tanf.rs","tanh.rs","tanhf.rs","tgamma.rs","tgammaf.rs","trunc.rs","truncf.rs"]}],"files":["lib.rs"]};
sourcesIndex["libsecp256k1"] = {"name":"","files":["lib.rs"]};
sourcesIndex["libsecp256k1_core"] = {"name":"","files":["der.rs","ecdh.rs","ecdsa.rs","ecmult.rs","error.rs","field.rs","group.rs","lib.rs","scalar.rs"]};
sourcesIndex["log"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["memchr"] = {"name":"","dirs":[{"name":"memchr","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse2.rs"]}],"files":["fallback.rs","iter.rs","mod.rs","naive.rs"]},{"name":"memmem","dirs":[{"name":"prefilter","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse.rs"]}],"files":["fallback.rs","genericsimd.rs","mod.rs"]},{"name":"x86","files":["avx.rs","mod.rs","sse.rs"]}],"files":["byte_frequencies.rs","genericsimd.rs","mod.rs","rabinkarp.rs","rarebytes.rs","twoway.rs","util.rs","vector.rs"]}],"files":["cow.rs","lib.rs"]};
sourcesIndex["memmap2"] = {"name":"","files":["lib.rs","unix.rs"]};
sourcesIndex["num_derive"] = {"name":"","files":["lib.rs","test.rs"]};
sourcesIndex["num_enum"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_enum_derive"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_traits"] = {"name":"","dirs":[{"name":"ops","files":["checked.rs","inv.rs","mod.rs","mul_add.rs","overflowing.rs","saturating.rs","wrapping.rs"]}],"files":["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","real.rs","sign.rs"]};
sourcesIndex["opaque_debug"] = {"name":"","files":["lib.rs"]};
sourcesIndex["ppv_lite86"] = {"name":"","dirs":[{"name":"x86_64","files":["mod.rs","sse2.rs"]}],"files":["lib.rs","soft.rs","types.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["detection.rs","fallback.rs","lib.rs","marker.rs","parse.rs","wrapper.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]};
sourcesIndex["rand"] = {"name":"","dirs":[{"name":"distributions","dirs":[{"name":"weighted","files":["alias_method.rs","mod.rs"]}],"files":["bernoulli.rs","binomial.rs","cauchy.rs","dirichlet.rs","exponential.rs","float.rs","gamma.rs","integer.rs","mod.rs","normal.rs","other.rs","pareto.rs","poisson.rs","triangular.rs","uniform.rs","unit_circle.rs","unit_sphere.rs","utils.rs","weibull.rs","ziggurat_tables.rs"]},{"name":"rngs","dirs":[{"name":"adapter","files":["mod.rs","read.rs","reseeding.rs"]}],"files":["entropy.rs","mock.rs","mod.rs","small.rs","std.rs","thread.rs"]},{"name":"seq","files":["index.rs","mod.rs"]}],"files":["lib.rs","prelude.rs"]};
sourcesIndex["rand_chacha"] = {"name":"","files":["chacha.rs","guts.rs","lib.rs"]};
sourcesIndex["rand_core"] = {"name":"","files":["block.rs","error.rs","impls.rs","le.rs","lib.rs","os.rs"]};
sourcesIndex["rand_pcg"] = {"name":"","files":["lib.rs","pcg128.rs","pcg64.rs"]};
sourcesIndex["regex"] = {"name":"","dirs":[{"name":"literal","files":["imp.rs","mod.rs"]}],"files":["backtrack.rs","compile.rs","dfa.rs","error.rs","exec.rs","expand.rs","find_byte.rs","input.rs","lib.rs","pikevm.rs","pool.rs","prog.rs","re_builder.rs","re_bytes.rs","re_set.rs","re_trait.rs","re_unicode.rs","sparse.rs","utf8.rs"]};
sourcesIndex["regex_syntax"] = {"name":"","dirs":[{"name":"ast","files":["mod.rs","parse.rs","print.rs","visitor.rs"]},{"name":"hir","dirs":[{"name":"literal","files":["mod.rs"]}],"files":["interval.rs","mod.rs","print.rs","translate.rs","visitor.rs"]},{"name":"unicode_tables","files":["age.rs","case_folding_simple.rs","general_category.rs","grapheme_cluster_break.rs","mod.rs","perl_word.rs","property_bool.rs","property_names.rs","property_values.rs","script.rs","script_extension.rs","sentence_break.rs","word_break.rs"]}],"files":["either.rs","error.rs","lib.rs","parser.rs","unicode.rs","utf8.rs"]};
sourcesIndex["rustversion"] = {"name":"","files":["attr.rs","bound.rs","constfn.rs","date.rs","error.rs","expr.rs","iter.rs","lib.rs","release.rs","time.rs","token.rs","version.rs"]};
sourcesIndex["serde"] = {"name":"","dirs":[{"name":"de","files":["ignored_any.rs","impls.rs","mod.rs","seed.rs","utf8.rs","value.rs"]},{"name":"private","files":["de.rs","doc.rs","mod.rs","ser.rs","size_hint.rs"]},{"name":"ser","files":["fmt.rs","impls.rs","impossible.rs","mod.rs"]}],"files":["integer128.rs","lib.rs","macros.rs"]};
sourcesIndex["serde_bytes"] = {"name":"","files":["bytebuf.rs","bytes.rs","de.rs","lib.rs","ser.rs"]};
sourcesIndex["serde_derive"] = {"name":"","dirs":[{"name":"internals","files":["ast.rs","attr.rs","case.rs","check.rs","ctxt.rs","mod.rs","receiver.rs","respan.rs","symbol.rs"]}],"files":["bound.rs","de.rs","dummy.rs","fragment.rs","lib.rs","pretend.rs","ser.rs","try.rs"]};
sourcesIndex["sha2"] = {"name":"","dirs":[{"name":"sha256","files":["soft.rs","x86.rs"]},{"name":"sha512","files":["soft.rs","x86.rs"]}],"files":["consts.rs","lib.rs","sha256.rs","sha512.rs"]};
sourcesIndex["sha3"] = {"name":"","files":["lib.rs","macros.rs","paddings.rs","reader.rs","state.rs"]};
sourcesIndex["solana_frozen_abi"] = {"name":"","files":["lib.rs"]};
sourcesIndex["solana_frozen_abi_macro"] = {"name":"","files":["lib.rs"]};
sourcesIndex["solana_logger"] = {"name":"","files":["lib.rs"]};
sourcesIndex["solana_program"] = {"name":"","dirs":[{"name":"nonce","dirs":[{"name":"state","files":["current.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"stake","files":["config.rs","instruction.rs","mod.rs","state.rs"]},{"name":"sysvar","files":["clock.rs","epoch_schedule.rs","fees.rs","instructions.rs","mod.rs","recent_blockhashes.rs","rent.rs","rewards.rs","slot_hashes.rs","slot_history.rs","stake_history.rs"]}],"files":["account_info.rs","borsh.rs","bpf_loader.rs","bpf_loader_deprecated.rs","bpf_loader_upgradeable.rs","clock.rs","decode_error.rs","entrypoint.rs","entrypoint_deprecated.rs","epoch_schedule.rs","feature.rs","fee_calculator.rs","hash.rs","incinerator.rs","instruction.rs","keccak.rs","lamports.rs","lib.rs","loader_instruction.rs","loader_upgradeable_instruction.rs","log.rs","message.rs","native_token.rs","program.rs","program_error.rs","program_memory.rs","program_option.rs","program_pack.rs","program_stubs.rs","pubkey.rs","rent.rs","sanitize.rs","secp256k1_program.rs","secp256k1_recover.rs","serialize_utils.rs","short_vec.rs","slot_hashes.rs","slot_history.rs","stake_history.rs","system_instruction.rs","system_program.rs"]};
sourcesIndex["solana_sdk_macro"] = {"name":"","files":["lib.rs"]};
sourcesIndex["spin"] = {"name":"","files":["lib.rs","mutex.rs","once.rs","rw_lock.rs"]};
sourcesIndex["spl_token"] = {"name":"","files":["error.rs","instruction.rs","lib.rs","native_mint.rs","processor.rs","state.rs"]};
sourcesIndex["subtle"] = {"name":"","files":["lib.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["clone.rs","debug.rs","eq.rs","fold.rs","gen_helper.rs","hash.rs","visit.rs","visit_mut.rs"]}],"files":["attr.rs","await.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","reserved.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","tt.rs","ty.rs","verbatim.rs","whitespace.rs"]};
sourcesIndex["synstructure"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["termcolor"] = {"name":"","files":["lib.rs"]};
sourcesIndex["thiserror"] = {"name":"","files":["aserror.rs","display.rs","lib.rs"]};
sourcesIndex["thiserror_impl"] = {"name":"","files":["ast.rs","attr.rs","expand.rs","fmt.rs","generics.rs","lib.rs","prop.rs","valid.rs"]};
sourcesIndex["typenum"] = {"name":"","files":["array.rs","bit.rs","int.rs","lib.rs","marker_traits.rs","operator_aliases.rs","private.rs","type_operators.rs","uint.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["zeroize"] = {"name":"","files":["lib.rs","x86.rs"]};
sourcesIndex["zeroize_derive"] = {"name":"","files":["lib.rs"]};
createSourceSidebar();
